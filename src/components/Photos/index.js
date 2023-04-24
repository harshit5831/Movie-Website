import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../assets/styles/media.scss";

import { photosEndpoint } from "../../axios/endpoints";
import ConditionalWrapper from "../ConditionalWrapper";
import Loading from "../../UI/Loading";
import Modal from "../../UI/Modal";
import useFetch from "../../hooks/useFetch";
import { BACKDROP_NOT_FOUND, BACKDROP_URL } from "../../utils/constants";

const Photos = ({ id }) => {
  const { data, isLoading } = useFetch(photosEndpoint(id));
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photoPath, setPhotoPath] = useState("");
  const isPhotos = data.backdrops?.length;

  const handleClick = (path) => {
    setIsOpenModal(true);
    setPhotoPath(path);
  };

  return (
    <Loading loading={isLoading}>
      <ConditionalWrapper
        isCondition={!isPhotos}
        text="No photos available"
        hasHalfHeight={true}
      >
        <div className="media_outer fade_in">
          <div className="media_inner">
            {data.backdrops?.map((photo, i) => {
              const { file_path } = photo;

              const src = file_path
                ? BACKDROP_URL + file_path
                : BACKDROP_NOT_FOUND;

              return (
                <div key={i} className="media_item">
                  <figure>
                    <picture>
                      <LazyLoadImage
                        src={src}
                        alt="media"
                        effect="blur"
                        onClick={() => handleClick(file_path)}
                      />
                    </picture>
                  </figure>
                </div>
              );
            })}
            <Modal open={isOpenModal} setOpen={setIsOpenModal}>
              <img src={BACKDROP_URL + photoPath} alt="media" />
            </Modal>
          </div>
        </div>
      </ConditionalWrapper>
    </Loading>
  );
};

export default Photos;
