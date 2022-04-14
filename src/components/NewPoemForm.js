import React, {useState, useEffect} from "react";

function NewPoemForm({setPoems}) {

  const [form, setForm] = useState({
    title:'',
    content:'',
    author: ''
  })

 



  return (
    <form className="new-poem-form">
      <input placeholder="Title" value={form.title} onChange={(e)=>{setForm([...form],e.target)}}/>
      <input placeholder="Author" value={form.author} />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
