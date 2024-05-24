// Importing necessary modules and components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action"; // Importing the editContact action from Redux

// EditContact component for editing an existing contact
function EditContact() {
  const { id } = useParams(); // Extracting the contact ID from the URL parameters
  console.log(id); // Logging the ID for debugging purposes

  const dispatch = useDispatch(); // Initializing the dispatch function from Redux

  const AllContact = useSelector((store) => store.contacts); // Getting all contacts from the Redux store

  // Defining the initial state for the form inputs
  const [form, setForm] = useState({});

  // Handling changes in form inputs and updating the state
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Dispatching the updated form data to the Redux store on form submission
  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  // Setting the form state with the contact details for the given ID when the component mounts
  useEffect(() => {
    AllContact.filter((el) => el.id === id && setForm(el));
  }, [id, AllContact]);

  // Rendering the form
  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="mobile-number">
          Mobile Number
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="mobile-number"
          type="number"
          name="mob"
          value={form.mob || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-md"
          id="status"
          name="status"
          value={form.status || "active"}
          onChange={handleChange}
        >
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}

// Exporting the EditContact component as the default export
export default EditContact;
