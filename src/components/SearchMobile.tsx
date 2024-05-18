import DateSelection from './DateSelection';
import HoursSelection from './HoursSelection';
import LocationSelection from './LocationSelection';

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container max-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location selection */}
          <LocationSelection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
