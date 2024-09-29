"use client";
import { Envelope, PaperPlane, User } from "phosphor-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-react";
import { div } from "framer-motion/client";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send data to a backend service)
  };

  return (
    <div className="p-3">
      <Card className="max-w-sm mx-auto my-4">
        <CardContent className="space-y-3">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Feel free to reach out with any questions or inquiries!
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="space-y-1">
              <Label htmlFor="name">Name*</Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="ps-11"
                  required
                />
                <InputIcon>
                  <User size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="ps-11"
                  required
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <fieldset className="space-y-1">
              <Label htmlFor="message">Message*</Label>
              <div className="relative">
                <Input
                  id="message"
                  as="textarea"
                  rows="4"
                  placeholder="Write your message"
                  className="ps-11"
                  required
                />
                <InputIcon>
                  <PaperPlane size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <Button type="submit" className="!mt-3 block w-full">
              Send Message
            </Button>
          </form>

          <Divider>Alternatively</Divider>
          <div className="text-center">
            <p>
              If you prefer, you can also reach out to me via email at{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-600 underline"
              >
                arun00kumar069@gmail.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
