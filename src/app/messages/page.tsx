"use client";

import { useState } from "react";
import {
  Search,
  MoreVertical,
  Video,
  Phone,
  Info,
  Send,
  Paperclip,
  Image as ImageIcon,
  Smile,
  Mic,
  CheckCheck,
  Clock,
} from "lucide-react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      user: {
        name: "Amina Diallo",
        avatar: "AD",
        status: "online",
        role: "Client • Abidjan",
      },
      lastMessage:
        "Je suis intéressée par la robe wax, quelle taille me conseillez-vous ?",
      time: "10:42",
      unread: 2,
      active: true,
    },
    {
      id: 2,
      user: {
        name: "Mohamed Keita",
        avatar: "MK",
        status: "offline",
        role: "Vendeur • Bamako",
      },
      lastMessage: "Votre commande a été expédiée ce matin",
      time: "Hier",
      unread: 0,
    },
    {
      id: 3,
      user: {
        name: "Fatou Sow",
        avatar: "FS",
        status: "online",
        role: "Collaboratrice • Madagascar",
      },
      lastMessage: "On se recontacte demain pour le projet ?",
      time: "10:30",
      unread: 1,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      content: "Bonjour ! Je suis intéressée par la robe wax premium",
      time: "10:30",
      read: true,
    },
    {
      id: 2,
      sender: "me",
      content:
        "Bonjour Amina ! Ravie de vous aider. De quelle taille avez-vous besoin ?",
      time: "10:32",
      read: true,
    },
    {
      id: 3,
      sender: "them",
      content:
        "Je fais généralement du M. Mais je ne sais pas si la coupe est ajustée ?",
      time: "10:35",
      read: true,
    },
    {
      id: 4,
      sender: "me",
      content:
        "La coupe est semi-ajustée. Je vous conseille de prendre votre taille habituelle. Pour référence, je fais 1m70 et le M me va parfaitement.",
      time: "10:40",
      read: true,
    },
    {
      id: 5,
      sender: "them",
      content:
        "Parfait ! Je prends le M alors. Quelle est la procédure pour commander ?",
      time: "10:42",
      read: false,
    },
  ];

  const selectedConversation = conversations.find((c) => c.id === selectedChat);

  return (
    <div className="max-w-7xl mx-auto top-22 sticky">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
        <div className="grid grid-cols-12 h-full">
          {/* Conversations List */}
          <div className="border-r border-gray-200 col-span-4">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Messages</h2>
              <div className="relative mt-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des messages..."
                  className="w-full pl-10 pr-4 py-1.5 bg-gray-100/50 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedChat === conversation.id ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-primary  flex items-center justify-center">
                        <span className="text-white font-bold">
                          {conversation.user.avatar}
                        </span>
                      </div>
                      {conversation.user.status === "online" && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    {/* Conversation Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {conversation.user.name}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {conversation.user.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">
                            {conversation.time}
                          </div>
                          {conversation.unread > 0 && (
                            <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full mt-1">
                              {conversation.unread}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 truncate mt-1">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Conversation */}
            <div className="p-4 border-t border-gray-200">
              <button className="w-full py-2 bg-primary text-white rounded-full font-medium hover:bg-[#006097] cursor-pointer">
                Nouvelle conversation
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">
                      {selectedConversation?.user.avatar}
                    </span>
                  </div>
                  {selectedConversation?.user.status === "online" && (
                    <div className="absolute bottom-1 right-0 w-2 h-2 bg-accent rounded-full border border-white"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedConversation?.user.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedConversation?.user.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="overflow-y-auto p-4 bg-gray-50 h-[29rem]">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xl rounded-2xl px-4 py-2 ${
                        msg.sender === "me"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <div
                        className={`text-xs mt-1 flex items-center ${
                          msg.sender === "me"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        <span>{msg.time}</span>
                        {msg.sender === "me" && (
                          <span className="ml-2">
                            {msg.read ? (
                              <CheckCheck className="w-3 h-3 inline" />
                            ) : (
                              <Clock className="w-3 h-3 inline" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    onKeyPress={(e) => e.key === "Enter" && setMessage("")}
                  />
                </div>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setMessage("")}
                  className="p-2 bg-primary text-white rounded-full hover:bg-[#006097]"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
