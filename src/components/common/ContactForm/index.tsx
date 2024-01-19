"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/common/title";
import { MotionShuffle } from "@/components/motion/motionShuffle";
import { StyledModal } from "@/components/common/ContactForm/Modal";
import { modalItems } from "@/components/common/ContactForm/Modal/modalItems";
import { Dropzone } from "@/components/common/FormFields/Dropzone";
import { validateEmail } from "@/components/common/FormFields/assets/validationFunctions";
import { TextField } from "@/components/common/FormFields/textField";
import { TextareaField } from "@/components/common/FormFields/textareaField";
import { CheckboxField } from "@/components/common/FormFields/checkboxField";

export const ContactForm = ({ isHome }: { isHome?: boolean }) => {
  const [show, setShow] = useState(false);
  const [filesArray, setFilesArray] = useState<File[]>([]);
  const [submittedFormValues, setSubmittedFormValues] =
    useState<FieldValues | null>(null);

  const t = useTranslations("common.contact");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>();

  /*
  const submitForm = async (data) => {
    setIsButtonDisabled(true);
    const newFile = file;
    let result;

    try {
      if (newFile !== '') {
      result = await uploadFile(newFile, {
          publicKey: '048fc6c2c4725837eab7',
          store: 'auto',
          metadata: {
            subsystem: 'uploader',
          },
        });
      } else {
        result = '';

      }

      await axios.post("https://submit-form.com/u2uKrqT6", {
        Imię: `${data.name}`,
        Email: `${data.email}`,
        Tel: `${data.tel}`,
        Czas_realizacji: `${data.realisation}`,
        Opis: `${data.description}`,
        Plik: `${result.cdnUrl || 'Brak pliku'}`,
        Uwaga: `Link do zdjęcia dostępny jest jedynie przez 24 godziny`,

        _email: {
          from: `${data.name}`,
          subject: `BAL Engineering - zamówienie na ${chosenOrderType}`,

          template: {
            title: false,
            footer: false,
          },
        },
      });
      setMessage(messageSentText);
    } catch (e) {
      console.log(e);
      setMessage(messageNotSentMessage);
    }

    reset();
    setIsButtonDisabled(false);
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setFile('');

  };

*/
  const onClick = () => console.log("sada");
  const onSubmit = async (data: FieldValues) => {
    setSubmittedFormValues(data);
    setShow(true);
    reset();

    const response = await fetch("https://submit-form.com/u2uKrqT6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Imię: data.fullName,
        Email: data.email,
        Wiadomość: data.description,
      }),
    })
      .then(function (response) {
        console.log(response);
        console.log(
          "Form submitted:",
          data.fullName,
          data.email,
          data.description
        );
        console.log("Files sent:", filesArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="w-4/5 max-w-[800px] mx-auto my-[50px]">
      <Title heading={t("Contact")} subheading={t("Contact us")} />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <MotionShuffle x={200}>
          <TextField
            type="text"
            register={register}
            errors={errors}
            fieldName="fullName"
            label={t("FullName")}
            placeholder={t("Enter your full name")}
            requiredMessage={t("This field is required")}
          />
        </MotionShuffle>
        <MotionShuffle x={-200}>
          <TextField
            type="email"
            register={register}
            errors={errors}
            fieldName="email"
            label={t("E-mail")}
            placeholder={t("Enter your e-mail")}
            requiredMessage={t("This field is required")}
            validateFunction={(value) =>
              validateEmail(value, t("Incorrect e-mail address"))
            }
          />
        </MotionShuffle>
        <MotionShuffle x={200}>
          <Dropzone
            filesArray={filesArray}
            setFilesArray={setFilesArray}
            mainLabel={t("Add files")}
            loadedLabel={t("Number of uploaded files")}
            emptyLabel={t("Select files")}
            loadedTitle={t("File(s) uploaded")}
            emptyTitle={t("No file(s) selected")}
            deleteTitle={t("Delete file")}
            deleteAll={t("Delete all files")}
          />
        </MotionShuffle>
        <MotionShuffle x={-200}>
          <TextareaField
            register={register}
            errors={errors}
            fieldName="description"
            placeholder={t("Write a message")}
            label={t("Message")}
            requiredMessage={t("This field is required")}
          />
        </MotionShuffle>
        <CheckboxField
          onClick={onClick}
          control={control}
          errors={errors}
          fieldName="consent"
          label={t("I consent to the processing of my personal data")}
          requiredMessage={t("Consent is required")}
        />
        <CheckboxField
          onClick={onClick}
          control={control}
          errors={errors}
          fieldName="consentEmail"
          label={t(
            "I agree to receive commercial through electronic communication"
          )}
        />
        <CheckboxField
          control={control}
          errors={errors}
          onClick={onClick}
          fieldName="consentPhone"
          label={t(
            "I also consent to receiving commercial through telecommunications"
          )}
        />
        <div className="text-[10px] text-left m-0">
          {t("This consent is voluntary")}
          <Link
            className="text-black"
            rel="noopener noreferrer"
            target="_blank"
            href={"https://kratki.com/pl/polityka-prywatnosci"}
          >
            {t("Privacy Policy")}
          </Link>
        </div>
        <div className="relative flex justify-center">
          <Button type="submit" className="mt-[50px]">
            {t("Send a message")}
          </Button>
        </div>
      </form>
      <StyledModal
        modalItems={modalItems}
        show={show}
        setShow={setShow}
        isHome={isHome}
        data={submittedFormValues}
      />
    </div>
  );
};
