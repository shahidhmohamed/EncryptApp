import React, { useState } from 'react';

const EncryptApp: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false);

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setInputText(text);
  };

  const handleConvert = () => {
    if (isEncrypted) {
      // Decrypt the text (simple Caesar cipher for example)
      const decryptedText = inputText
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - 3))
        .join('');
      setOutputText(decryptedText);
    } else {
      // Encrypt the text (simple Caesar cipher for example)
      const encryptedText = inputText
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 3))
        .join('');
      setOutputText(encryptedText);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(outputText);
    alert('Copied to clipboard!');
  };

  const handleSwap = () => {
    setInputText(outputText);
    setOutputText('');
    setIsEncrypted(!isEncrypted);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Encrypt/Decrypt Tool</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <textarea
          className="p-2 border rounded-lg w-full"
          rows={5}
          placeholder={isEncrypted ? 'Encrypted message...' : 'Type or paste text to encrypt...'}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <textarea
          className="p-2 border rounded-lg w-full"
          rows={5}
          placeholder={isEncrypted ? 'Decrypted message...' : 'Encrypted message will appear here...'}
          value={outputText}
          readOnly
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 justify-center">
        <button
          className="px-4 py-2 text-white bg-gray-800 rounded-lg w-full"
          onClick={handlePaste}
        >
          Paste
        </button>
        <button
          className="px-4 py-2 bg-blue-800 text-white rounded-lg w-full"
          onClick={handleConvert}
        >
          Convert
        </button>
        <button
          className="px-4 py-2 bg-green-800 text-white rounded-lg w-full"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className="px-4 py-2 bg-yellow-400 text-white rounded-lg w-full"
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default EncryptApp;
