import { handle, json } from "next-runtime";
import { Form, useFormSubmit } from 'next-runtime/form'

export const getServerSideProps = handle({
  async get() {
    return json({ name: "initial name" });
  },

  async post({ req: { body } }) {
    return json({ message: `submitted ${body.name}` });
  }
});

export default function HtmlForm(props) {

  const form = useFormSubmit('nameForm');
console.log("FORM",form,"props",props)
  if (form.isLoading) {
    return <p>{`Currently submitting ${form.values.name}`}</p>;
  }
   if ("message" in props) {
    return <p>{props.message}</p>;
  } 

  

  return (
  <>
    {/* {"message" in props && <p>{props.message}</p>} */}
    <Form method="post" name="nameForm">
      <input name="name" defaultValue={props.name} />
      <input type="submit" />
      </Form>
      </>
  );
}
