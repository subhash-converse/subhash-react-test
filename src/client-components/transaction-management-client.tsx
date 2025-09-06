"use client"
import React from 'react'
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const categories = [
  {
    label: "Food",
    value: "food"
  },
  {
    label: "Transport",
    value: "transport"
  },
  {
    label: "Entertainment",
    value: "entertainment"
  },
  {
    label: "Bills",
    value: "bills"
  },
  {
    label: "Income",
    value: "income"
  },
  {
    label: "Snaks",
    value: "snaks"
  },
]

const TransactionManagementClient = () => {
  return (
    <div className=' bg-red-100 p-3 rounded-xl h-full overflow-auto grid grid-rows-[1fr_80px] gap-8'>
      <div className='grid grid-rows-[auto_1fr] gap-5'>
        <div className='bg-white rounded-xl py-4 xl:py-0  grid md:grid-cols-[1fr_1fr] md:grid-rows-2 xl:grid-cols-3 xl:h-[4rem] gap-5 xl:grid-rows-1 items-center xl:!items-center xl:gap-5 px-6'>
          <div className='xl:grid xl:grid-cols-[90px_1fr] xl:items-center '>
            <div>
              Category
            </div>
            <Select >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    categories.map((category, index) => (<SelectItem key={index} value={category.value}>{category.label}</SelectItem>))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

         <div className='xl:grid xl:grid-cols-[90px_1fr] xl:items-center '>
            <div>
              Amount
            </div>
            <Input type="number" placeholder="Amount" />
          </div>

          <div className='xl:grid xl:grid-cols-[90px_1fr] xl:items-center '>
            <div>
              Range
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker className='' />
              </DemoContainer>
            </LocalizationProvider>
          </div>


        </div>
        <Table className='bg-white rounded-xl px-6'>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className='text-lg bg-gray-50 h-[50px]'>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice} className='hover:bg-gray-50 h-[50px]'>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}

export default TransactionManagementClient
