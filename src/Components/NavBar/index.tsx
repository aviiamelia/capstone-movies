import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";

const NavBar = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem color="white" w="100%">
        <Flex w="100%" bg="#000000" justify="space-between" alignItems="center">
          <Box padding="1rem">
            <BreadcrumbItem>
              <Image src={Logo} alt="logo" width="50%" />
            </BreadcrumbItem>
          </Box>
          <Box padding="1rem">
            <BreadcrumbItem padding="0px 5px" color="white">
              <BreadcrumbLink as={Link} to="/about">
                Sobre Nós
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem padding="0px 5px" color="white">
              <BreadcrumbLink as={Link} to="/about">
                Entrar
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem padding="0px 5px" bg="#C11B1B" color="white">
              <BreadcrumbLink as={Link} to="/about">
                Junte-se
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Box>
        </Flex>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default NavBar;
