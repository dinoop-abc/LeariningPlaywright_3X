
import * as XLSX from 'xlsx';
import path from 'path';

export interface OrangeLoginData {
    description: string;
    username: string;
    password: string;
    shouldPass: boolean;
    expectedError: string;
}

export class OrangeExcel {

    static getLoginData(): OrangeLoginData[] {

        // Locate the Excel file
        const filePath = path.resolve(
            process.cwd(),
            'tests',
            '18_Data_Driven',
            'test-data',
            'orange-login.xlsx'
        );

        // Read the Excel workbook
        const workbook = XLSX.readFile(filePath);

        // Get the first worksheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error('Excel worksheet not found');
        }

        // Convert Excel rows into JavaScript objects
        const rows = XLSX.utils.sheet_to_json<
            Record<string, unknown>
        >(worksheet, { defval: '' });

        // Return typed test data
        return rows.map((row) => ({
            description: String(row['description']),
            username: String(row['username']),
            password: String(row['password']),

            shouldPass:
                row['shouldPass'] === true ||
                String(row['shouldPass']).toUpperCase() === 'TRUE',

            expectedError: String(row['expectedError'])
        }));
    }
}
