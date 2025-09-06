'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AxiosInstance } from '../../services/axiosInstance';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface Transaction {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

type DataInterFace = {
  total_balance: number;
  monthly_income: number;
  monthly_expences: number;
  savings_rate: number;
  'percentage-changes': number;
  'recent-transactions': Transaction[];
};

const DashboardClient = () => {
  const [data, setData] = useState<DataInterFace>();
  useEffect(() => {
    AxiosInstance.get('/transactions')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // setError(error.message);
      });
  }, []);

  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-8 overflow-auto rounded-xl bg-red-100 p-3">
      <div className="grid w-full grid-rows-4 gap-2 md:grid-cols-4 md:grid-rows-1 md:gap-7">
        <Card className="duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Total Balance</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-end text-2xl font-bold">{`₹ ${data?.total_balance}`}</p>
          </CardContent>
        </Card>
        <Card className="duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Monthly Income</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-end text-2xl font-bold">{`₹ ${data?.monthly_income}`}</p>
          </CardContent>
        </Card>
        <Card className="duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Monthly Expenses</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-end text-2xl font-bold">{`₹ ${data?.monthly_expences}`}</p>
          </CardContent>
        </Card>
        <Card className="duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Savings Rate</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-end text-2xl font-bold">{`${data?.savings_rate}%`}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-3 md:gap-8">
        <Card className="duration-200 hover:scale-100 hover:bg-gray-50 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Percentage Changes </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-end text-2xl font-bold">{`${data?.['percentage-changes']}%`}</p>
          </CardContent>
        </Card>
        <div>
          <Table className="rounded-xl bg-white">
            <TableHeader className="h-[50px] bg-gray-50 text-lg">
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(data?.['recent-transactions']) &&
                data?.['recent-transactions'].map((transactions, index) => (
                  <TableRow key={index} className="h-[50px] hover:bg-gray-50">
                    <TableCell className="font-medium">{transactions.id}</TableCell>
                    <TableCell>{transactions.amount}</TableCell>
                    <TableCell>{transactions.category}</TableCell>
                    <TableCell>{transactions.description}</TableCell>
                    <TableCell>{transactions.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {transactions.type === 'income' ? (
                          <span className="text-green-400">
                            <FaPlus />
                          </span>
                        ) : (
                          <span className="text-red-400">
                            <FaMinus />
                          </span>
                        )}{' '}
                        <span>{transactions.type}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
