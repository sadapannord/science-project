import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import spaceBackground from "../images/space.jpg";

function CreateProject(props) {
  const [formState, setFormState] = useState({
    title: "",
    notes: "",
  });
  const [addProject] = useMutation(ADD_PROJECT);

  const HandleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="relative">
        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg"
          onSubmit={HandleFormSubmit}
        >
          <label>
            Project Title
            <input
              className="text-black"
              type="title"
              name="title"
              onChange={handleInputChange}
              placeholder="Project Title"
            />
          </label>
          <label>
            Notes
            <input
              className="text-black"
              type="notes"
              name="notes"
              onChange={handleInputChange}
              placeholder="Notes"
            />
          </label>
          <input type="submit" value="Start New Project" />
        </form>
        <img src={spaceBackground} alt="background" />
      </div>
    </div>
  );
}
export default CreateProject;
