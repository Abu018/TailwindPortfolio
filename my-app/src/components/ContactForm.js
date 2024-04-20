import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-8">
      <p className="text-gray-600 text-sm">
        &copy; 2024 Your Company. All rights reserved.
      </p>
      <p className="text-gray-600 text-sm">
        Follow us on Linked:{" "}
        <a
          href="https://www.linkedin.com/in/abubakar-mohammad-326471254/"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p className="text-gray-600 text-sm">
        Contact us at:{" "}
        <a href="mailto:iam.abu.mohammad@gmail.com" className="text-green-500">
          iam.abu.mohammad@gmail.com
        </a>
      </p>
      <p className="text-gray-600 text-sm">
        Visit our GitHub:{" "}
        <a
          href="https://github.com/your_github_id"
          className="text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your GitHub
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
