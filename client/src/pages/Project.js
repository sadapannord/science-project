import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import spaceBackground from "../images/space.jpg";
import Planets from "../components/Planets";

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
          className="absolute text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg m-5 p-5"
          onSubmit={HandleFormSubmit}
        >
          <label>
            Project Title:
            <input
              className="text-black px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg"
              type="title"
              name="title"
              onChange={handleInputChange}
              placeholder="Project Title"
            />
          </label>
          <Planets />
          <div className="px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg">
            *area for api generated info*
          </div>
          <label>
            Notes: 
            <input // change input to textarea idk if that matters
              className="text-black px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg"

              type="notes"
              name="notes"
              onChange={handleInputChange}
              placeholder="Notes"
              rows='10' cols='30'
            />
          </label>
          <div>
          <input className="px-3 p-2 m-2 border-solid border-2 border-purple-400 rounded-lg" type="submit" value="Start New Project" />
          </div>
        </form>
        <div> {/* area for generated project */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg m-20 p-2">
              <h1>Your new project</h1>
            </div>
          </div>
        </div> 
        <img src={spaceBackground} alt="background" />
      </div>
    </div>

  );
}
export default CreateProject;
