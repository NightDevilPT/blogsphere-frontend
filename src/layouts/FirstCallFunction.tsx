"use client";

import { useAppDispatch } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { ChildProps } from "@/types/types";
import React, { useEffect } from "react";


const FirstCallFunction = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();

	const fetchProfile=async()=>{
		dispatch(fetchProfileData())
	}

	useEffect(()=>{
		fetchProfile()
	},[])
	return <>{children}</>;
};

export default FirstCallFunction;
