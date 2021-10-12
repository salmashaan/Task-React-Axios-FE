import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import axios from "axios";
import { useEffect } from "react";

// Endpoints:
// Fetch all rooms:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
// GET

// Create a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
// Method: POST
// Data required: title,image,description

// Update a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
// Method: PUT
// Data required: title,image,description

// Delete a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
// Method: Delete

// Create a msg:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
// Method: POST
// Data required: msg

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(...rooms, response.data);
      // to do : call BE to create a room
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = (id) => {
    // to do : call BE to delete a room
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList rooms={rooms} />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
