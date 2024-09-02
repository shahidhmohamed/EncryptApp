import React, { useState } from 'react';

const EncryptApp: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);

  const encryptText = (text: string): string => {
    return btoa(text); // Simple base64 encoding for demonstration
  };

  const decryptText = (text: string): string => {
    try {
      return atob(text);
    } catch (e) {
      return 'Invalid encrypted text!';
    }
  };

  const handleConvert = () => {
    if (isEncrypted) {
      setOutputText(encryptText(inputText));
    } else {
      setOutputText(decryptText(inputText));
    }
  };

  const handleSwap = () => {
    setInputText(outputText);
    setOutputText('');
    setIsEncrypted(!isEncrypted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-35">
      <h1 className="mb-6 text-2xl font-bold text-white">Encrypt and Decrypt</h1>
      <div className="flex space-x-4">
        <textarea
          className="p-4 w-64 h-40 border rounded-md"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={isEncrypted ? "Type or paste text to encrypt" : "Paste encrypted text"}
        />
        <textarea
          className="p-4 w-64 h-40 border rounded-md"
          value={outputText}
          readOnly
          placeholder="Output will appear here"
        />
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={handlePaste}
        >
          Paste
        </button>
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded-md"
          onClick={handleConvert}
        >
          Convert
        </button>
        <button
          className="px-4 py-2 bg-yellow-400 text-white rounded-md"
          onClick={handleSwap}
        >
          Swap
        </button>
        <button
          className="px-4 py-2 bg-green-700 text-white rounded-md"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default EncryptApp;
