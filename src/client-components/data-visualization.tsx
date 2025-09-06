'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Example from '@/components/data-visualization/spending-by-catogory';
import Example1 from '@/components/data-visualization/income-vs-expenses';
import Example2 from '@/components/data-visualization/top-spending-categories';
import { AxiosInstance } from '../../services/axiosInstance';

interface SpendingByCategory {
  name: string;
  value: number;
}
interface IncomeVsExpenses {
  name: string;
  expence: number;
  income: number;
  amt: number;
}
interface TopSpendingCategories {
  name: string;
  expence: number;
  amt: number;
}

type DataVisuals = {
  spending_by_category: { data: SpendingByCategory[] };
  income_vs_expenses: { data: IncomeVsExpenses[] };
  top_spending_categories: { data: TopSpendingCategories[] };
};

const tabList = [
  {
    label: 'Spending by Category',
    value: 'spending-by-category',
  },
  {
    label: 'Income vs Expenses',
    value: 'income-vs-expenses',
  },
  {
    label: 'Top Spending Categories',
    value: 'top-spending-categories',
  },
];

const DataVisualizationClient = () => {
  const [data, setData] = useState<DataVisuals>();
  useEffect(() => {
    AxiosInstance.get('/data_visuals')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // setError(error.message);
      });
  }, []);

  return (
    <div className="grid h-full grid-rows-[50px_1fr] gap-4 overflow-auto rounded-xl bg-red-100 p-3">
      <div className="flex items-center px-2">
        <h1 className="text-xl">Data Visualization</h1>
      </div>
      {/* <div> */}
      <Tabs defaultValue="account" className="grid w-full grid-rows-[auto_1fr] gap-4">
        <TabsList>
          {tabList.map((tab, index) => (
            <TabsTrigger className="p-4" key={index} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          className="grid grid-cols-1 gap-5 lg:grid-cols-[60%_1fr]"
          value="spending-by-category"
        >
          <div className="rounded-xl bg-white p-5">
            <Example data={data?.spending_by_category} />
          </div>
          <div className="rounded-xl bg-white p-10">
            <div className="grid grid-cols-[200px_200px]">
              <div className="bg-gray-100 p-1 text-lg">Category</div>
              <div className="bg-gray-100 p-1 text-lg">Value</div>
              {data?.spending_by_category.data.map((data, index) => (
                <>
                  <div>{data.name}</div>
                  <div>{data.value}</div>
                </>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent
          className="grid grid-cols-1 gap-5 lg:grid-cols-[60%_1fr]"
          value="income-vs-expenses"
        >
          <div className="rounded-xl bg-white p-5">
            <Example1 data={data?.income_vs_expenses} />
          </div>
          <div className="rounded-xl bg-white p-10">
            <div className="grid grid-cols-[200px_200px_200px]">
              <div className="bg-gray-100 p-1 text-lg">Month</div>
              <div className="bg-gray-100 p-1 text-lg">Income</div>
              <div className="bg-gray-100 p-1 text-lg">Expence</div>
              {data?.income_vs_expenses.data.map((data, index) => (
                <>
                  <div>{data.name}</div>
                  <div>{data.income}</div>
                  <div>{data.expence}</div>
                </>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent
          className="grid grid-cols-1 gap-5 lg:grid-cols-[60%_1fr]"
          value="top-spending-categories"
        >
          <div className="rounded-xl bg-white p-5">
            <Example2 data={data?.top_spending_categories} />
          </div>
          <div className="rounded-xl bg-white p-10">
            <div className="grid grid-cols-[200px_200px]">
              <div className="bg-gray-100 p-1 text-lg">Category</div>
              <div className="bg-gray-100 p-1 text-lg">Value</div>
              {data?.top_spending_categories.data.map((data, index) => (
                <>
                  <div>{data.name}</div>
                  <div>{data.expence}</div>
                </>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      {/* </div> */}
    </div>
  );
};

export default DataVisualizationClient;
