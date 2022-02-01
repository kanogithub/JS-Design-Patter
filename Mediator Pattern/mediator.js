// The Mediator pattern provides central authority over a group of objects by controlling
// how these objects interact with each other. The "central" object is known as the 'mediator'.
// The mediator pattern is useful in scenarios where every object needs to be aware of any state
// change in any other object in the group.

function Member(name) {
	this.name = name
	this.chatroom = null
}

Member.prototype = {
	send: function (message, toMember) {
		this.chatroom.send(message, this, toMember)
	},
	sendAll: function (message) {
		this.chatroom.sendAll(message, this)
	},
	receive: function (message, fromMember) {
		console.log(`${fromMember.name} to ${this.name}: ${message}`)
	},
}

function Chatroom() {
	this.members = []
}

Chatroom.prototype = {
	addMember: function (member) {
		this.members[this.members.length] = member
		member.chatroom = this
	},
	send: function (message, fromMember, toMember) {
		toMember.receive(message, fromMember)
	},
	sendAll: function (message, fromMember) {
		this.members.forEach((member) => {
			if (fromMember !== member) member.receive(message, fromMember)
		})
	},
	showMembers: function () {
		console.log(this.members)
	},
}

// using

const chat = new Chatroom()

const john = new Member('John')
const peter = new Member('Peter')
const tim = new Member('tim')

chat.addMember(john)
chat.addMember(peter)
chat.addMember(tim)

chat.showMembers()
john.sendAll('hey, guys')
peter.send("what's up?", john)
john.send('do you wanna dinner?', peter)
peter.send('sounds good!', john)
tim.sendAll("I'm in")
