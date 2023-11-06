"use client"
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useLinks() {
    const router = useRouter()
    const ROUTES = {
        PROFILE: '/profile',
        REGISTER: '/register',
        LOGIN: '/login',
        DASHBOARDS: '/dashboards',
        HOME: '/',
        SUBSCRIPTIONS: '/subscriptions',
        ACCOUNT_SETTINGS: '/account-settings',
        PAYMENT_METHODS: '/payment-methods',
        CLOSE_ACCOUNT: '/close-account',
    }

    const navigateToRegister = useCallback(() => router.push(ROUTES.REGISTER), []);
    const navigateToLogin = useCallback(() => router.push(ROUTES.LOGIN), []);
    const navigateToDashboards = useCallback(() => router.push(ROUTES.DASHBOARDS), []);
    const navigateToProfile = useCallback(() => router.push(ROUTES.PROFILE), []);
    const navigateToHome = useCallback(() => router.push(ROUTES.HOME), []);
    const navigateToSubscriptions = useCallback(() => router.push(ROUTES.SUBSCRIPTIONS), []);
    const navigateToAccountSettings = useCallback(() => router.push(ROUTES.ACCOUNT_SETTINGS), []);
    const navigateToPaymentMethods = useCallback(() => router.push(ROUTES.PAYMENT_METHODS), []);
    const navigateToCloseAccount = useCallback(() => router.push(ROUTES.CLOSE_ACCOUNT), []);


    return {
        ROUTES,
        navigateToRegister,
        navigateToLogin,
        navigateToDashboards,
        navigateToProfile,
        navigateToHome,
        navigateToSubscriptions,
        navigateToAccountSettings,
        navigateToPaymentMethods,
        navigateToCloseAccount
    }
};


