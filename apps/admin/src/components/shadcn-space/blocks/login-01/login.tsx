import { Button } from "@/components/ui/button";
import { Card,CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bglogin.jpg')" }}>
      
      <div className="py-10 md:py-1 max-w-lg px-4 sm:px-0 mx-auto w-full">
        <Card className="max-w-lg px-6 py-8 sm:p-12 relative gap-3">
          <CardHeader className="text-center gap-3 p-0">
            <div className="flex flex-col gap-1">
              <CardTitle className="text-2xl font-medium text-card-foreground style-bold">
                Login
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground font-normal">
                Login mock data is email: test and password: test
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <form>
              <FieldGroup className="gap-3">
                <div className="flex flex-col gap-4">
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="email"
                      className="text-sm text-muted-foreground font-normal"
                    >
                      Email:
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="mock email: test"
                      required
                      className="dark:bg-background h-9 shadow-xs"
                    />
                  </Field>
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="password"
                      className="text-sm text-muted-foreground font-normal"
                    >
                      Password:
                    </FieldLabel>

                    <Input
                      id="password"
                      type="password"
                      placeholder="mock password: test"
                      required
                      className="dark:bg-background h-9 shadow-xs"
                    />
                  </Field>
                </div>

                <Field orientation="horizontal" className="justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="terms"
                      defaultChecked
                      className="cursor-pointer"
                    />
                    <FieldLabel
                      htmlFor="terms"
                      className="text-sm text-primary font-normal cursor-pointer"
                    >
                      Remember this device
                    </FieldLabel>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-card-foreground font-medium text-end"
                  >
                    Forgot password?
                  </a>
                </Field>

                <Field className="gap-4">
                  <Button type="submit" size={"lg"} className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer">
                    Sign in
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
