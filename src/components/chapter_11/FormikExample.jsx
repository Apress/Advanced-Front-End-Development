import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikExample = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              {/* Label */}
              <label className="text-lg font-semibold text-gray-800">
                Email:
              </label>

              {/* Input Field - Increased Width */}
              <Field
                type="email"
                name="email"
                className="w-full md:w-96 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Error Message */}
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikExample;
