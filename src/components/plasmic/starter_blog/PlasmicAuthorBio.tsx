// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2XiRTrANos1tumXyUCiwGi
// Component: B7W9w2mioLlV2
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_starter_blog.module.css"; // plasmic-import: 2XiRTrANos1tumXyUCiwGi/projectcss
import * as sty from "./PlasmicAuthorBio.module.css"; // plasmic-import: B7W9w2mioLlV2/css

import PlasmicLogoIcon from "./icons/PlasmicIcon__PlasmicLogo"; // plasmic-import: CGRgROc1KqTS9/icon

export type PlasmicAuthorBio__VariantMembers = {};

export type PlasmicAuthorBio__VariantsArgs = {};
type VariantPropType = keyof PlasmicAuthorBio__VariantsArgs;
export const PlasmicAuthorBio__VariantProps = new Array<VariantPropType>();

export type PlasmicAuthorBio__ArgsType = {
  profilepic?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAuthorBio__ArgsType;
export const PlasmicAuthorBio__ArgProps = new Array<ArgPropType>(
  "profilepic",
  "description"
);

export type PlasmicAuthorBio__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultAuthorBioProps {
  profilepic?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

function PlasmicAuthorBio__RenderFunc(props: {
  variants: PlasmicAuthorBio__VariantsArgs;
  args: PlasmicAuthorBio__ArgsType;
  overrides: PlasmicAuthorBio__OverridesType;
  dataFetches?: PlasmicAuthorBio__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <PlasmicLogoIcon
            className={classNames(defaultcss.all, sty.svg__m70Ik)}
            role={"img"}
          />
        ),

        value: args.profilepic
      })}

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Built with love by the Plasmic team. ",
          value: args.description
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthorBio__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthorBio__VariantsArgs;
    args?: PlasmicAuthorBio__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAuthorBio__Fetches;
  } & Omit<PlasmicAuthorBio__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAuthorBio__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAuthorBio__ArgProps,
      internalVariantPropNames: PlasmicAuthorBio__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAuthorBio__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthorBio";
  } else {
    func.displayName = `PlasmicAuthorBio.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthorBio = Object.assign(
  // Top-level PlasmicAuthorBio renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicAuthorBio
    internalVariantProps: PlasmicAuthorBio__VariantProps,
    internalArgProps: PlasmicAuthorBio__ArgProps
  }
);

export default PlasmicAuthorBio;
/* prettier-ignore-end */
