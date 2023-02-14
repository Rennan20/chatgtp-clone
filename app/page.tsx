import {
  AcademicCapIcon,
  AdjustmentsVerticalIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-3xl font-bold mb-10">ChatGPT </h1>
      <h5 className="mb-20 mt-0">Clone made by Rennan Silva</h5>

      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon */}
            <AcademicCapIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              "Explain quantum mechanics in simple terms"
            </p>
            <p className="infoText">
              "Got any creative ideas for my developer resume?"
            </p>
            <p className="infoText">"How to make API calls in Javascript?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon */}
            <AdjustmentsVerticalIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast Notifications when ChatGPT is thinking!
            </p>
            <p className="infoText">Uses OpenAI API!</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon */}
            <ExclamationCircleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
