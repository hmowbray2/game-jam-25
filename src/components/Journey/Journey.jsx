import React, { useState } from "react";
import { Heading } from "./Heading";
import { HeroBanner } from "./HeroBanner";
import { journeySteps } from "../../steps";
import { useNavigate, useLocation } from "react-router-dom";
import { Choice } from "./Choice";
import { usePoints } from '../../hooks/usePoints';


export const Journey = () => {
  const location = useLocation();
  const initialStep = location.state?.step || 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();

  const { totalPoints, setTotalPoints } = usePoints();

  const incrementPoints = (addedAmount) => {
    setTotalPoints(totalPoints + addedAmount);
  }

  const handleNextStep = ({ heading, text, points }) => {
    incrementPoints(totalPoints + points);

    if (currentStep < journeySteps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate("/feedback", {
        state: {
          title: journeySteps[currentStep].chapter,
          step: currentStep,
        },
      });
    } else if (currentStep === journeySteps.length - 1) {
      navigate("/feedback", {
        state: { title: "Game Over", step: currentStep },
      });
    }
  };

  const { chapter, title, question, answers } = journeySteps[currentStep];

  return (
    <>
      <Heading text={chapter} title={title} />
      <HeroBanner question={question} chapter={chapter} />
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="flex justify-center items-center">
          <Choice answers={answers} handleNextStep={handleNextStep} />
        </div>
      </div>
    </>
  );
};
