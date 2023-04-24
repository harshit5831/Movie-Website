import React from "react";
import { useAppContext } from "../../context";

import ConditionalWrapper from "../../components/ConditionalWrapper";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import Button from "../../UI/Button";

const Favorite = () => {
  const { favorites, handleClearFavorites } = useAppContext();

  return (
    <Layout title="Favorite">
      <ConditionalWrapper
        isCondition={!favorites?.length}
        text="Favorite list is empty"
      >
        <Cards title="Favorite Movies" data={favorites} />
        <Button
          style={{ padding: "0 20px 40px 20px" }}
          center={true}
          onClick={handleClearFavorites}
        >
          Clear
        </Button>
      </ConditionalWrapper>
    </Layout>
  );
};

export default Favorite;
