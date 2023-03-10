import React from "react";
import {
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Card,
	Center,
	CardBody,
	Heading,
	Button,
	Container,
	CardHeader,
	CardFooter,
	Text,
	Box,
	Flex,
	Textarea,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import SendOrder from "../common/SendOrder.jsx";

const Cart = () => {
	const [cart, setCart] = useContext(CartContext);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");

	return (
		<>
			<Center bg="white" h="100px" color="black">
				<Heading as="h2" size="2xl">
					Carrito
				</Heading>
			</Center>
			{cart.map((item) => {
				return (
					<Container key={item.id} className="main-catalogue">
						<Card maxW="sm">
							<CardHeader>
								<Heading size="md">{item.nombre}</Heading>
							</CardHeader>
							<CardBody>
								<Text as="b">Quantity: {item.quantity}</Text>
								<Text>Price: U$D {item.precio}</Text>
							</CardBody>
							<CardFooter>
								<Button
									colorScheme="red"
									onClick={() => console.log("Eliminando")}
								>
									Eliminar del carrito
								</Button>
							</CardFooter>
						</Card>
					</Container>
				);
			})}
			<SendOrder />
		</>
	);
};

export default Cart;
