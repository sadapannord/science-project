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
  const [projects, setProjects] = useState([]); // New state variable to hold projects
  const [addProject] = useMutation(ADD_PROJECT);
  const [inputs, setInputs] = useState([]); // New state variable to hold inputs
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
      setProjects([...projects, data.addProject]); // add new project to the projects array
      setInputs([...inputs, formState]); // add new input to the inputs array
      setFormState({ title: "", notes: "" }); // clear the form
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
    <div className="relative">
      <div className="absolute text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg">
        <div className="flex justify-center">
          <div className="w-1/2">
            <div className="px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg bg-purple-300" >
              <h1>What Planet would you like to research?: </h1>
              <Planets />
            </div>
          </div>
          <div className="w-1/2">
            <div className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1 bg-purple-300">
              <form className="border-solid border-2 border-purple-200 rounded-lg m-2 p-2 bg-purple-300" onSubmit={handleFormSubmit}>
                <label>
                  Project Title:
                  <input
                    className="text-black px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg"
                    type="title"
                    name="title"
                    value={formState.title} // bind value to state variable
                    onChange={handleInputChange}
                    placeholder="Project Title"
                  />
                </label>
                <br></br>
                <label>
                  Notes:
                  <input
                    className="text-black px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg"
                    type="notes"
                    name="notes"
                    value={formState.notes} // bind value to state variable
                    onChange={handleInputChange}
                    placeholder="Notes"
                  />
                </label>
                <div>
                  <input className="px-3 p-2 m-2 border-solid border-2 border-purple-200 rounded-lg" type="submit" value="Start New Project" />
                </div>
              </form>
              {projects.map((project) => (
                <div className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1 bg-purple-300" key={project._id}>
                  <div className="text-5xl title">
                    {project.title}
                  </div>
                  <div className="text-xl">
                    {project.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className="bg-no-repeat bg-cover h-screen w-screen" src={spaceBackground} alt="background" />
    </div>
  );

};
export default CreateProject








