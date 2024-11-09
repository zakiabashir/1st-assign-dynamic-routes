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
        <div className=' grid justify-center text-red-900 z-50  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>
        
            <h1 className="text-2xl">Name: <span className="text-xl text-green-200">{country.name} </span></h1>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
        </div>
    );
}
