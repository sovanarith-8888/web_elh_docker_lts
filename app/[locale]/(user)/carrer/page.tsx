'use client'
import { careers } from "@/app/[locale]/(user)/carrer/data";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react'
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "../fonts";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Chip,
  Spacer,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import {
  BriefcaseIcon,
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  Pin,
  CheckCircle2,
  ListChecks,
  FileText,
} from "lucide-react";

const Carrer = () => {
  const job = careers[0]; // Just take the first job
  const translator = useTranslations("AboutUs");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
  return (
    // <main className={` mt-60`}>
    //   <div className="max-w-4xl mx-auto p-6">
    //     <Card shadow="md" className="w-full">
    //       <CardHeader className="flex flex-col items-start gap-1">
    //         <p className="text-2xl font-bold">{job.title}</p>
    //         <p className="text-default-500">{job.businessUnit}</p>
    //         <div className="flex gap-2 mt-2 flex-wrap">
    //           <Chip color="primary" variant="flat">
    //             Closing: {job.closingDate}
    //           </Chip>
    //           <Chip color="secondary" variant="flat">
    //             {job.jobType}
    //           </Chip>
    //           <Chip color="success" variant="flat">
    //             Hiring: {job.numberOfHiring}
    //           </Chip>
    //         </div>
    //       </CardHeader>

    //       <Divider />

    //       <CardBody className="space-y-6">
    //         <section>
    //           <p className="text-lg font-semibold mb-2">
    //             📝 Job Description
    //           </p>
    //           <Listbox>
    //             {job.description.map((desc, i) => (
    //               <ListboxItem key={i}>{desc}</ListboxItem>
    //             ))}
    //           </Listbox>
    //         </section>

    //         <section>
    //           <p className="text-lg font-semibold mb-2">
    //             ✅ Job Requirements
    //           </p>
    //           <Listbox>
    //             {job.requirements.map((req, i) => (
    //               <ListboxItem key={i}>{req}</ListboxItem>
    //             ))}
    //           </Listbox>
    //         </section>

    //         <section>
    //           <p className="text-lg font-semibold mb-2">
    //             📬 How to Apply
    //           </p>
    //           <p>
    //             <strong>Email:</strong>{" "}
    //             <a
    //               href={`mailto:${job.contact.email}`}
    //               className="text-blue-500 underline"
    //             >
    //               {job.contact.email}
    //             </a>
    //           </p>
    //           <p>
    //             <strong>Telegram:</strong> {job.contact.telegram}
    //           </p>
    //           <p>
    //             <strong>Phone:</strong>
    //           </p>
    //           <ul className="list-disc ml-6 text-sm text-default-500">
    //             {job.contact.phones.map((phone, i) => (
    //               <li key={i}>{phone}</li>
    //             ))}
    //           </ul>
    //         </section>
    //       </CardBody>
    //     </Card>
    //   </div>
    // </main>
    <div className="mt-60 max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-logo ">{job.businessUnit}</h1>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle=<div className="flex flex-wrap gap-3 mt-2">
            <Chip
              startContent={<CalendarIcon size={16} />}
              color="primary"
              variant="flat"
              className="p-4"
            >
              Closing: {job.closingDate}
            </Chip>
            <Chip
              startContent={<BriefcaseIcon size={16} />}
              color="primary"
              variant="flat"
              className="p-4"
            >
              {job.jobType}
            </Chip>
            <Chip color="success" variant="flat" className="p-4">
              Hiring: {job.numberOfHiring}
            </Chip>
          </div>
          title=<p className="text-2xl font-bold ">{job.title}</p>
        >
          {/* Description Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <FileText size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">Job Description</h2>
            </div>
            <ul className="list-disc pl-6 text-default-600 space-y-1">
              {job.description.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <Pin size={18} className="mt-0.5 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
          {/* Requirements Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <ListChecks size={20} className="text-success" />
              <h2 className="text-lg font-semibold">Requirements</h2>
            </div>
            <ul className="list-disc pl-6 text-default-600 space-y-1">
              {job.requirements.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="mt-0.5 text-success" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        </AccordionItem>
      </Accordion>

      <Spacer y={2} />
      <Card shadow="none" className="w-full">
        <CardHeader className="flex flex-col items-start gap-2">
          <p className="text-2xl font-bold ">{job.title}</p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Chip
              startContent={<CalendarIcon size={16} />}
              color="primary"
              variant="flat"
              className="p-4"
            >
              Closing: {job.closingDate}
            </Chip>
            <Chip
              startContent={<BriefcaseIcon size={16} />}
              color="primary"
              variant="flat"
              className="p-4"
            >
              {job.jobType}
            </Chip>
            <Chip color="success" variant="flat" className="p-4">
              Hiring: {job.numberOfHiring}
            </Chip>
          </div>
        </CardHeader>

        <Divider />

        <CardBody className="space-y-6 pt-4">
          {/* Description Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <FileText size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">Job Description</h2>
            </div>
            <ul className="list-disc pl-6 text-default-600 space-y-1">
              {job.description.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <Pin size={18} className="mt-0.5 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <ListChecks size={20} className="text-success" />
              <h2 className="text-lg font-semibold">Requirements</h2>
            </div>
            <ul className="list-disc pl-6 text-default-600 space-y-1">
              {job.requirements.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="mt-0.5 text-success" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Application Section */}
          <section>
            <p className="text-lg font-semibold mb-2">📬 How to Apply</p>
            <div className="space-y-1">
              <p className="flex items-center gap-2 text-default-600">
                <MailIcon size={18} />
                <a
                  href={`mailto:${job.contact.email}`}
                  className="text-blue-600 underline"
                >
                  {job.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2 text-default-600">
                <MessageCircleIcon size={18} /> Telegram: {job.contact.telegram}
              </p>
              <p className="flex items-center gap-2 text-default-600">
                <PhoneIcon size={18} /> Phone:
              </p>
              <ul className="list-disc pl-6 text-default-600">
                {job.contact.phones.map((phone, i) => (
                  <li key={i}>{phone}</li>
                ))}
              </ul>
            </div>
          </section>
        </CardBody>
      </Card>
    </div>
  );
}

export default Carrer;