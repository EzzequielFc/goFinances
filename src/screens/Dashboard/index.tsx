import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento",
      amount: "R$ 123132",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "12/12/12",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento",
      amount: "R$ 123132",
      category: { name: "Vendas", icon: "coffee" },
      date: "12/12/12",
    },
    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento",
      amount: "R$ 123132",
      category: { name: "Vendas", icon: "shopping-bag" },
      date: "12/12/12",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/93431754?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Ezequiel</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          amount="R$ 17.400,00"
          title="Entradas"
          lastTransaction="Ontem"
          type="up"
        />
        <HighlightCard
          amount="R$ 17.400,00"
          title="Entradas"
          lastTransaction="Ontem"
          type="down"
        />
        <HighlightCard
          amount="R$ 17.400,00"
          title="Entradas"
          lastTransaction="Ontem"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
