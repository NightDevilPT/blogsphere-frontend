"use client";

import React, { useEffect, useState } from "react";
import InputComponent from "../FormComponent/InputComponent";
import InputSelectComponent from "../FormComponent/InputSelectComponent";
import { avtarConstants } from "@/constants/avtars";
import DialogFrame from "../common/dialog";
import { MdOutlineClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Request } from "@/services/Request";
import ShowNotification from "../ShowNotification";
import { fetchProfileData } from "@/redux/slices/profileSlice";

const CreateProfile = () => {
	const avtarNames = Object.keys(avtarConstants);
	const [image, setImage] = useState<string>(avtarNames[0]);
	const [showDialog, setShowDialog] = useState<boolean>(false);
	const route = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const profile = useAppSelector((state: RootState) => state.profile);
	const dispatch = useAppDispatch();

	const createProfile = async (event: any) => {
		event.preventDefault();
		const formData = {
			firstname: event.target.firstname.value,
			lastname: event.target.lastname.value,
			gender: event.target.gender.value,
			facebook: event.target.facebook.value,
			instagram: event.target.instagram.value,
			twitter: event.target.twitter.value,
			youtube: event.target.youtube.value,
			bio: event.target.bio.value,
			image,
		};
		setLoading(true);
		try {
			const response = await Request(
				!profile.data?.profile
					? "/profile/create"
					: `/profile/${profile.data.profile.id}`,
				profile.data?.profile ? "PUT" : "POST",
				formData
			);
			console.log(response, "consoling response");
			if (response.status === 200) {
				ShowNotification(response.message);
				dispatch(fetchProfileData());
			} else {
				ShowNotification(response.response.data.message);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// !profile.data && route.push("/auth/login");
		if (profile.data && profile.data.profile) {
			setImage(profile.data.profile.image);
		}
	}, [profile.data]);

	return (
		<div
			className={`grid grid-cols-3 max-lg:flex max-lg:justify-start max-lg:flex-col place-content-start gap-5 mt-5 overflow-auto`}
		>
			<div
				className={`w-full h-auto max-lg:mt-5 flex justify-start items-center cursor-pointer flex-col gap-5 rounded`}
			>
				<img
					src={avtarConstants[image]}
					className={` h-52 object-contain rounded-full`}
				/>
				<button
					className={`px-3 py-1 rounded text-primary-bg bg-primary-fg font-bold`}
					onClick={() => setShowDialog(true)}
				>
					Choose avtar
				</button>
			</div>
			<div
				className={`w-full h-full col-span-2 flex justify-start items-start flex-col overflow-y-auto pb-5`}
			>
				<form
					className={`w-full h-auto text-primary-fg gap-5`}
					onSubmit={createProfile}
				>
					<div
						className={`w-full h-auto flex justify-start items-start flex-col text-primary-fg gap-5`}
					>
						<h1
							className={`relative w-full rounded text-xl text-primary-fg py-2 after:content-[''] after:w-56 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:rounded`}
						>
							Personal Information
						</h1>
						<div className="w-full h-auto grid grid-cols-2 gap-5 max-[580px]:grid-cols-1">
							<InputComponent
								type="text"
								label="firstname"
								required={true}
								value={
									profile.data?.profile?.firstname
										? profile.data.profile.firstname
										: ""
								}
							/>
							<InputComponent
								type="text"
								label="lastname"
								required={true}
								value={
									profile.data?.profile?.lastname
										? profile.data.profile.lastname
										: ""
								}
							/>
						</div>
						<InputSelectComponent
							type="text"
							label="gender"
							required={true}
							values={["male", "female", "other"]}
							value={
								profile.data?.profile?.gender
									? profile.data.profile.gender
									: ""
							}
						/>
						<InputComponent
							type="textarea"
							label="bio"
							required={true}
							value={
								profile.data?.profile?.bio
									? profile.data.profile.bio
									: ""
							}
						/>
					</div>

					<div
						className={` mt-5 w-full h-auto flex justify-start items-start flex-col text-primary-fg gap-5`}
					>
						<h1
							className={`relative w-full rounded text-xl text-primary-fg py-2 after:content-[''] after:w-56 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:rounded`}
						>
							Social Information
						</h1>
						<div className="w-full h-auto grid grid-cols-2 gap-5 max-[580px]:grid-cols-1">
							<InputComponent
								type="text"
								label="facebook"
								value={
									profile.data?.profile?.facebook
										? profile.data.profile.facebook
										: ""
								}
							/>
							<InputComponent
								type="text"
								label="instagram"
								value={
									profile.data?.profile?.instagram
										? profile.data.profile.instagram
										: ""
								}
							/>
						</div>
						<div className="w-full h-auto grid grid-cols-2 gap-5 max-[580px]:grid-cols-1">
							<InputComponent
								type="text"
								label="twitter"
								value={
									profile.data?.profile?.twitter
										? profile.data.profile.twitter
										: ""
								}
							/>
							<InputComponent
								type="text"
								label="youtube"
								value={
									profile.data?.profile?.youtube
										? profile.data.profile.youtube
										: ""
								}
							/>
						</div>
					</div>
					<button
						type="submit"
						className={`w-full h-10 mt-5 bg-slate-200 text-slate-900 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						{profile.data?.profile
							? "Update Profile"
							: "Save Profile"}{" "}
						{loading && (
							<span
								className={`w-5 h-5 border-2 rounded-full border-slate-300 border-t-secondary-fg animate-spin`}
							/>
						)}
					</button>
				</form>
			</div>
			<DialogFrame show={showDialog}>
				<button
					className={`absolute right-5 top-5 rounded p-1 text-primary-fg flex justify-center items-center font-bold text-sm gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300`}
					onClick={() => {
						setShowDialog(false);
					}}
				>
					<MdOutlineClose className={`w-5 h-5`} />
				</button>
				<div
					className={`w-full h-auto p-2 flex justify-between items-center text-primary-fg font-bold text-xl`}
				>
					<h1>Choose Avtar</h1>
				</div>
				<div
					className={` mt-3 min-h-[200px] h-56 bg-primary-bg p-5 rounded grid grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] place-items-center gap-4 overflow-y-auto flex-wrap`}
				>
					{Object.keys(avtarConstants).map(
						(items: string, index: number) => {
							return (
								<button
									className={`p-1 border-4 rounded-full ${
										image === items
											? "border-highlight"
											: "border-transparent"
									}`}
									onClick={() => setImage(items)}
								>
									<img
										src={avtarConstants[items]}
										className={`h-full w-full object-contain rounded-full`}
									/>
								</button>
							);
						}
					)}
				</div>
			</DialogFrame>
		</div>
	);
};

export default CreateProfile;
