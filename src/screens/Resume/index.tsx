import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Container, Header, Title, Content } from "./styles";

import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  date: string;
  category: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === "negative"
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      const total = categorySum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      totalByCategory.push({
        name: category.name,
        color: category.color,
        total,
        key: category.key,
      });
    });

    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <Content>
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.total}
            color="red"
          />
        ))}
      </Content>
    </Container>
  );
}
