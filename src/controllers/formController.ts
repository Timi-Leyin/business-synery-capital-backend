import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to insert user data into the database
async function createUser(req: Request, res: Response): Promise<void> {
  if (req.method === 'POST') {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      employmentStatus,
      monthlyIncome,
      loanType,
      loanAmount,
      loanPurpose,
      creditScore,
      loanPurposeExplanation,
    } = req.body;

    // Insert user data into the database
    const newUser = await prisma.loanApplication.create({
      data: {
        firstName,
        lastName,
        dateOfBirth,
        employmentStatus,
        monthlyIncome,
        loanType,
        loanAmount,
        loanPurpose,
        creditScore,
        loanPurposeExplanation,
      },
    });

    // Send an email to the specified address
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'phantomf1245@gmail.com', // Replace with your Gmail email address
        pass: 'bdoqrenybjftyecs', // Use the 16-character App Password here
      },
    });
    

const mailOptions = {
  from: 'godsfavour1975@gmail.com',
  to: 'godsfavour1975@gmail.com',
  subject: 'New User Registration',
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New User Registration</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                text-align: center;
                padding: 20px;
            }

            h2 {
                color: #333;
            }

            .container {
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                padding: 20px;
                max-width: 400px;
                margin: 0 auto;
            }

            p {
                font-size: 18px;
                margin: 10px 0;
                text-align: left;
            }

            .field-label {
                font-weight: bold;
            }

            .email {
                color: #007bff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New User Registration</h2>
            <p class="field-label">First Name:</p>
            <p>${firstName}</p>
            
            <p class="field-label">Last Name:</p>
            <p>${lastName}</p>
            
            <p class="field-label">Date of Birth:</p>
            <p>${dateOfBirth}</p>
            
            <p class="field-label">Employment Status:</p>
            <p>${employmentStatus}</p>
            
            <p class="field-label">Monthly Income:</p>
            <p>${monthlyIncome}</p>
            
            <p class="field-label">Loan Type:</p>
            <p>${loanType}</p>
            
            <p class="field-label">Loan Amount:</p>
            <p>${loanAmount}</p>
            
            <p class="field-label">Loan Purpose:</p>
            <p>${loanPurpose}</p>
            
            <p class="field-label">Credit Score:</p>
            <p>${creditScore}</p>
            
            <p class="field-label">Loan Purpose Explanation:</p>
            <p>${loanPurposeExplanation}</p>
            
            <p class="field-label">loan type:</p>
            <p class="email">${loanType}</p>
        </div>
    </body>
    </html>
  `,
};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }}
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export { createUser };
