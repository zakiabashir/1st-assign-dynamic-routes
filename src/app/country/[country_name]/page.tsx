import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define a type for each country's data
type Country = {
    name: string;
    population: string;
    capital: string;
};

// Define countries using a Record to allow dynamic string indexing
const countries: Record<string, Country> = {
    canada: { name: "Canada", population: "38 million", capital: "Ottawa" },
    france: { name: "France", population: "67 million", capital: "Paris" },
    germany: { name: "Germany", population: "83 million", capital: "Berlin" },
    japan: { name: "Japan", population: "126 million", capital: "Tokyo" },
    australia: { name: "Australia", population: "25 million", capital: "Canberra" },
};

export default function CountryPage({ params }: { params: { country_name: string } }) {
    const { country_name } = params;

    // Access the country data dynamically
    const country = countries[country_name.toLowerCase()];

    if (!country) {
        return <p>Country not found.</p>;
    }

    return (
        <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> 
        <div className=' grid justify-center text-red-900 z-50  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>
        <CardHeader className="p-4"  >
           < CardTitle  className=" p-2 text-center bg-gradient-to-br from-red-400 via-gray-400 to-teal-400">
            <h1 className="text-2xl">{country.name} </h1>
            </CardTitle>
            </CardHeader>
            <CardContent className="pb-4 mb-4 bg-gradient-to-br from-red-300 via-gray-300 to-teal-300 ">
            <p className="p-2"><strong>Population:</strong> {country.population}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            </CardContent>
        </div>
        </Card>
    );
}
