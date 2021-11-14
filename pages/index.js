import { handle, json } from "next-runtime";
import { Form, useFormSubmit } from 'next-runtime/form'

export const getServerSideProps = handle({
  async get() {
    return json({ name: "initial name" });
  },

  async post({ req, res }) {
    console.log('req.headers["accept"]',req.headers["accept"])
    if (req.headers["accept"].startsWith("application/json")) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ message: `Submitted ${req.body.name}` }));
      res.end()
    }
  }
});

export default function HtmlForm(props) {

  const form = useFormSubmit('nameForm');

  if (form.isLoading) {
    return <p>{`Currently submitting ${form.values.name}`}</p>;
  }

  if (form?.data?.message) {
    return <p>{`${form.data.message}`}</p>;
  }

  return (
  <>
    {form?.data?.message && <p>{form.data.message}</p>}
    <Form method="post" name="nameForm">
      <input name="name" defaultValue={props.name} />
      <input type="submit" />
      </Form>
      </>
  );
}
