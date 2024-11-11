"use client";
import { Box, Flex, Grid, TextArea } from "@radix-ui/themes";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string(),
  message: z.string(),
});
export const ContactPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Box className=" justify-end rounded w-full h-full ">
      <Flex
        className="bg-[#0788FF] bg-opacity-20 h-1/4 items-center "
        justify={"end"}
      >
        <Flex className=" text-white  flex-col">
          <div className="text-4xl">Let's Discuss Your Project</div>
          <div className="">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </div>
        </Flex>
      </Flex>
      <Flex
        className="bg-[0788FF] bg-opacity-10 h-3/4 flex-col items-end "
        justify={"center"}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-1/2"
          >
            <Grid className="space-x-3" columns={"2"}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your message</FormLabel>
                  <FormControl>
                    <TextArea
                      placeholder="Your Message"
                      className="bg-white opacity-5 text-white"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 p-6 rounded-3xl border border-white"
            >
              SEND MESSAGE
            </Button>
          </form>
        </Form>
      </Flex>
    </Box>
  );
};
