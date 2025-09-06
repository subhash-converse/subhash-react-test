"use client"
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AxiosInstance } from '../../services/axiosInstance';
import { FaMinus,FaPlus } from "react-icons/fa"




interface Transaction {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
}


type DataInterFace = {
  "total_balance": number,
  "monthly_income": number,
  "monthly_expences": number,
  "savings_rate": number,
  "percentage-changes": number,
  "recent-transactions": Transaction[]
}

const DashboardClient = () => {
  const [data, setData] = useState<DataInterFace>()
  useEffect(() => {
    AxiosInstance.get('/transactions')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // setError(error.message);
      });
  }, []);

  return (
    <div className='bg-red-100 p-3 rounded-xl h-full overflow-auto grid grid-rows-[auto_1fr] gap-8'>
      <div className='grid grid-rows-4 gap-2 md:grid-cols-4 md:grid-rows-1 md:gap-7 w-full '>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Total Balance</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${data?.total_balance}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Monthly Income</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${data?.monthly_income}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Monthly Expenses</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${data?.monthly_expences}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Savings Rate</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`${data?.savings_rate}%`}</p>
          </CardContent>

        </Card>
      </div>
      <div className='grid grid-rows-[auto_1fr] gap-3  md:gap-8'>
        <Card className=' hover:bg-gray-50 hover:scale-100 hover:shadow-lg duration-200 '>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Percentage Changes </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`${data?.['percentage-changes']}%`}</p>
          </CardContent>

        </Card>
        <div>
          <Table className='bg-white rounded-xl'>
            <TableHeader className='text-lg bg-gray-50 h-[50px]'>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead >Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(data?.['recent-transactions']) && data?.['recent-transactions'] .map((transactions,index) => (
                <TableRow key={index} className='hover:bg-gray-50 h-[50px]'>
                  <TableCell className="font-medium">{transactions.id}</TableCell>
                  <TableCell>{transactions.amount}</TableCell>
                  <TableCell>{transactions.category}</TableCell>
                  <TableCell>{transactions.description}</TableCell>
                  <TableCell>{transactions.date}</TableCell>
                  <TableCell><div className='flex gap-2 items-center'>{transactions.type === "income" ? <span className='text-green-400'><FaPlus/></span>  : <span className='text-red-400'><FaMinus/></span>} <span>{transactions.type}</span></div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

    </div>
  )
}

export default DashboardClient
