import { useQuery } from "@apollo/client";
import * as React from "react";
import { GET_TAGS } from "../../../services/graphql/queries";
import {
  GetTagsInputProps,
  GetTagsOutputProps,
  Tag,
} from "../../../shared/interfaces/tag";

interface Props {
  tag: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
}

const TagSelect: React.FC<Props> = ({ setTag, tag }) => {
  const { data, loading } = useQuery<GetTagsOutputProps, GetTagsInputProps>(
    GET_TAGS
  );
  return (
    <React.Fragment>
      <select
        required
        value={tag}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setTag(e.target.value);
        }}
        className="shadow-sm font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
      >
        {loading ? (
          <option value="">Please wait...</option>
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.tagsLength === 0 ? (
                  <option value="">No tags found</option>
                ) : (
                  <React.Fragment>
                    <option value="">Please Select</option>
                    {data?.tags?.map((tag: Tag, i: number) => (
                      <React.Fragment key={i}>
                        <option value={tag?.id}>{tag?.name}</option>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <option value="">Oops, could not fetch tags</option>
            )}
          </React.Fragment>
        )}
      </select>
    </React.Fragment>
  );
};

export default TagSelect;
