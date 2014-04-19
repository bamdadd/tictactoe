tictactoe
=========

TicTacToe multi player game in Javascript, NodeJS, Socket.IO, RabbitMQ, EventSourcing, MessageQueue

This is an attempt to practies these technologies in a project and deploy a reall Facebook application.

About me
=========
@Bamdad in Twitter
http://www.bamdad.me.uk

Features:
- Javascript Application
- Multicasting messages to all users using socket.io
- Message queueing using RabbitMQ
- Processing messages on the servers side with NodeJS


Flow:
=========
- User joins
- User creates a table
- Get the table URL
- Share the url with a friend
- User 2 joins
- Game starts
- Players play
- Game finishes
- Results of the game publishes



Nice to Have
============
- Leaderboard
- Facebook integration for login and creating table
- Facebook integration for sharing URL and inviting friends
- Facebook integration for friends joining
- Facebook integration for sharing the results


Infrastructure
=============
- Amazon AWS instances
- Deployment scripts will be written from scratch and the code will be published in this repo

