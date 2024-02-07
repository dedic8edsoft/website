import classNames from 'classnames';
import React, { useState } from 'react';

interface IAccordionItem {
  id: number;
  title: string;
  content: string;
}

interface IAccordionProps {
  data: IAccordionItem[];
}

export const Accordion = ({ data }: IAccordionProps) => {
  const [openSectionId, setOpenSectionId] = useState(undefined);

  const toggleSection = (sectionId) => {
    setOpenSectionId(sectionId === openSectionId ? undefined : sectionId);
  };

  return (
    <div className="accordion">
      {data.map((section) => (
        <div key={section.id} className="bg-white shadow-sm mb-2">
          <div
            className={classNames(
              'py-3 px-7.5 cursor-pointer transition-all duration-300',
              openSectionId === section.id && 'text-blue-100'
            )}
            onClick={() => toggleSection(section.id)}
          >
            <h3 className="text-normal">{section.title}</h3>
          </div>
          <div
            className={classNames(
              'h-0 transition-all duration-300 hidden overflow-hidden max-h-0',
              openSectionId === section.id && '!h-auto !block max-h-40'
            )}
          >
            <div className="p-7.5 pt-2.5 text-3.5 text-gray-100">{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
