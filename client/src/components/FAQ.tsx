import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the FAQ interface based on your schema
interface FAQ {
    _id: string;
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get<FAQ[]>('http://localhost:5000/faqs');
                setFaqs(response.data);
            } catch (error) {
                console.error('Error fetching FAQs', error);
                setError('Failed to load FAQs. Please try again later.');
            }
        };

        fetchFAQs();
    }, []);

    return (
        <div className="bg-[#F5F2F8] py-12">
            <div className="container mx-auto px-4 max-w-screen-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}
                {faqs.length === 0 ? (
                    <p className="text-gray-700">No FAQs available at the moment.</p>
                ) : (
                    <div className="space-y-6">
                        {faqs.map(faq => (
                            <div key={faq._id} className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                                <p className="text-gray-700 mt-2">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;