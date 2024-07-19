import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button, divider, link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  ChevronDown,
  Scale,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Home,
} from "@/components/icons";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Image, User, DropdownSection } from "@nextui-org/react";
import { useSession,signOut } from 'next-auth/react';

export const Navbar = () => {
  const { data: session, status } = useSession();
  const userData = {
    name: (session?.user?.firstname)+' '+(session?.user?.lastname),
    email: session?.user?.email,
    image: session?.user?.image
  }
  
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    home: <Home/>,
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
    <NavbarContent className="hidden sm:flex gap-4" justify="start">
      <NavbarBrand className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* ----------- */}
            <Image
              width={40}
              alt="BNML Logo"
              src="/assets/bnml_logo.jpg"
            />
              <p className="font-bold text-inherit">BNML IS</p>
            </NextLink>
          </NavbarBrand>
          
          {siteConfig.navItems.map((item) => (


            (item.dropDownItems)  
            ? 
            <Dropdown key={item.key}>
            <NavbarItem >
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                  style={{fontSize:"16px",bottom:"0.5px",color:"hsl(201.82 24.44% 8.82% / 1)"}}
                >
                  {item.label}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {item.dropDownItems.map((dropdownitem)=> (

                    <DropdownItem
                    key={dropdownitem.key}
                    description={dropdownitem.description}
                    // startContent={icons.activity}
                    as={Link}
                    href={dropdownitem.href}
                    >
                    {dropdownitem.label}
                    </DropdownItem>
              ))}
            
            </DropdownMenu>
          </Dropdown>
            : 
            <NavbarItem key={item.key}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
          )
         
          )}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >

      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: "p-0 border-small border-divider bg-background",
        }}
      >

      <DropdownTrigger>
      <User
        avatarProps={{radius: "lg", src: userData.image}}
        description={userData.email}

        name={userData.name}
        style={{cursor:"pointer"}}
      >
        {userData.email}
      </User>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem key="dashboard" as={Link} href="/">
            Dashboard
          </DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
        </DropdownSection>


        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="logout" onClick={()=>{signOut()}}>Log Out</DropdownItem>
        </DropdownSection> 
      </DropdownMenu>


          </Dropdown>

      </NavbarContent>

     

      

   

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
