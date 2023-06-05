import PropTypes from "prop-types";
import React, { useState } from "react";
import { ReactComponent as IconBack } from "../assets/img/back.svg";
import { ReactComponent as IconFilter } from "../assets/img/filter.svg";
import { ReactComponent as IconChecked } from "../assets/img/radio-checked.svg";
import { ReactComponent as IconUnchecked } from "../assets/img/radio-unchecked.svg";

import {
  Wrapper,
  Back,
  Filter,
  FilterToggle,
  FilterMenu,
  FilterItem,
} from "./TollsPanel.styled";

const TollsPanel = ({ filter, filterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { label: "show all", value: null },
    { label: "follow", value: false },
    { label: "followings", value: true },
  ];

  const handleToggleClick = () => setIsOpen(!isOpen);
  const handleOptionChange = (value) => {
    filterChange(value);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Back to="/" title="Сlick to back">
        <IconBack stroke="#5736a3" />
      </Back>
      <Filter title="Сlick to Filter">
        <FilterToggle onClick={() => handleToggleClick()}>
          <IconFilter stroke="#5736a3" />
        </FilterToggle>
        {isOpen && (
          <FilterMenu>
            {options.map((option, index) => (
              <FilterItem
                key={index}
                onClick={() => handleOptionChange(option.value)}
              >
                {filter === option.value ? (
                  <IconChecked fill="#4CA361" width={"20px"} />
                ) : (
                  <IconUnchecked fill="#5736a3" width={"20px"} />
                )}
                {option.label}
              </FilterItem>
            ))}
          </FilterMenu>
        )}
      </Filter>
    </Wrapper>
  );
};

TollsPanel.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default TollsPanel;