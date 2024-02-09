import { useState } from 'react';

interface ChatGPTResponse {
    response: string;
    isLoading: boolean;
    error: string | null;
    chatGPTRequest: (query: string) => Promise<void>;
}

const useChatGPT = (): ChatGPTResponse => {
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [responseCache, setResponseCache] = useState<{ [key: string]: string }>({});

    const apiKey = import.meta.env.VITE_GPT_API_KEY;
    const chatGPTRequest = async (query: string): Promise<void> => {
        setIsLoading(true);
        setError(null);

        try {
            if (responseCache[query]) {
                setResponse(responseCache[query]);
                setIsLoading(false);
                return;
            }

            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'text-embedding-ada-002', // You can choose the model you want to use
                    prompt: query,
                    max_tokens: 150 // Adjust as needed
                })
            });

            const data = await response.json();
            const responseData: string = data.choices[0].text.trim();

            // Cache the response
            setResponseCache(prevCache => ({
                ...prevCache,
                [query]: responseData
            }));

            setResponse(responseData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { response, isLoading, error, chatGPTRequest };
};

export default useChatGPT;
