import React from 'react'
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

const DashboardClient = () => {
  return (
    <div className='bg-red-100 p-3 rounded-xl h-full overflow-auto grid grid-rows-[auto_1fr] gap-8'>
      <div className='grid grid-rows-4 gap-2 md:grid-cols-4 md:grid-rows-1 md:gap-7 w-full '>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Total Balance</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${1000}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Monthly Income</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${5000}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Monthly Expenses</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`₹ ${2000}`}</p>
          </CardContent>

        </Card>
        <Card className=' hover:bg-gray-50 hover:scale-105 hover:shadow-lg duration-200'>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Savings Rate</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-end'>{`${Number(String((5000 - 2000 / 5000) * 100).substring(0, 2))}%`}</p>
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
             <p className='text-2xl font-bold text-end'>{`${Number(String((5000 - 2000 / 5000) * 100).substring(0, 2))}%`}</p>
          </CardContent>

        </Card>
        <div>
          <Table className='bg-white rounded-xl'>
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
      </div>

    </div>
  )
}

export default DashboardClient
