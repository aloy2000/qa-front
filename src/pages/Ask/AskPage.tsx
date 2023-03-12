import React from "react";
import { Page } from "../../components/Child/Page";
import { useForm } from "react-hook-form";
import {
  FieldContainer,
  FieldError,
  FieldInput,
  FieldLabel,
  FieldTextArea,
  Fieldset,
  FormButtonContainer,
  PrimaryButton,
  SubmissionSuccess,
} from "../../Styles";
import { postQuestion } from "../../data/QuestionData";

export default function AskPage() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>();

  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  const submitForm = async (data: FormData) => {
    const result = await postQuestion({
      title: data.title,
      content: data.content,
      userName: "Rapatrick",
      created: new Date(),
    });
    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page title="Ask Page io zandry">
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset disabled={isSubmitting || successfullySubmitted}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              type="text"
              {...register("title", { required: true, minLength: 10 })}
              aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.title && errors.title.type === "required" && (
              <FieldError>You must enter the question title</FieldError>
            )}
            {errors.title && errors.title.type === "minLength" && (
              <FieldError>The title must be at least 10 characters</FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              id="content"
              {...register("content", { required: true, minLength: 50 })}
              aria-invalid={errors.content ? "true" : "false"}
            />
            {errors.content && errors.content.type === "required" && (
              <FieldError>You must enter the question content</FieldError>
            )}
            {errors.content && errors.content.type === "minLength" && (
              <FieldError>
                The content must be at least 50 characters
              </FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question </PrimaryButton>
          </FormButtonContainer>
          {successfullySubmitted && (
            <SubmissionSuccess>
              Your question was successfully submitted
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
}

type FormData = {
  title: string;
  content: string;
};
