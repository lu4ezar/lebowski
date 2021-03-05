import { Formik, Form as FForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    product: yup.string(),
    quantity: yup.number(),
    priceForUnit: yup.number(),
    totalPrice: yup.number()
  });
  return (
    <div>
      <Formik
        initialValues={{
          product: "",
          quantity: "",
          priceForUnit: "",
          totalPrice: ""
        }}
        validationSchema={schema}
        onSubmit={() => console.log("submitted: ")}
      >
        {({ isSubmitting }) => (
          <FForm>
            <Field type="product" name="product" />
            <ErrorMessage name="product" component="div" />
            <Field type="quantity" name="quantity" />
            <ErrorMessage name="quantity" component="div" />
            <Field type="priceForUnit" name="priceForUnit" />
            <ErrorMessage name="priceForUnit" component="div" />
            <Field type="totalPrice" name="totalPrice" />
            <ErrorMessage name="totalPrice" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </FForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
