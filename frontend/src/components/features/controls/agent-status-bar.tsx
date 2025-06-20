import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { I18nKey } from "#/i18n/declaration";
import { showErrorToast } from "#/utils/error-handler";
import { RootState } from "#/store";
import { AgentState } from "#/types/agent-state";
import {
  AGENT_STATUS_MAP,
  IndicatorColor,
} from "../../agent-status-map.constant";
import { useWsClient } from "#/context/ws-client-provider";
import { useNotification } from "#/hooks/useNotification";
import { browserTab } from "#/utils/browser-tab";
import { useActiveConversation } from "#/hooks/query/use-active-conversation";

const notificationStates = [
  AgentState.AWAITING_USER_INPUT,
  AgentState.FINISHED,
  AgentState.AWAITING_USER_CONFIRMATION,
];

export function AgentStatusBar() {
  const { t, i18n } = useTranslation();
  const { curAgentState } = useSelector((state: RootState) => state.agent);
  const { curStatusMessage } = useSelector((state: RootState) => state.status);
  const { status } = useWsClient();
  const { notify } = useNotification();
  const { data: conversation } = useActiveConversation();

  const [statusMessage, setStatusMessage] = React.useState<string>("");

  const updateStatusMessage = () => {
    let message = curStatusMessage.message || "";
    if (curStatusMessage?.id) {
      const id = curStatusMessage.id.trim();
      if (i18n.exists(id)) {
        message = t(curStatusMessage.id.trim()) || message;
      }
    }
    if (curStatusMessage?.type === "error") {
      showErrorToast({
        message,
        source: "agent-status",
        metadata: { ...curStatusMessage },
      });
      return;
    }
    if (message.trim()) {
      setStatusMessage(message);
    } else {
      setStatusMessage(AGENT_STATUS_MAP[curAgentState].message);
    }
  };

  React.useEffect(() => {
    updateStatusMessage();
  }, [curStatusMessage.id]);

  // Handle window focus/blur
  React.useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleFocus = () => {
      browserTab.stopNotification();
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
      browserTab.stopNotification();
    };
  }, []);

  const [indicatorColor, setIndicatorColor] = React.useState<string>(
    AGENT_STATUS_MAP[curAgentState].indicator,
  );

  React.useEffect(() => {
    if (conversation?.status === "CONNECTING") {
      setStatusMessage(t(I18nKey.STATUS$CONNECTING_TO_RUNTIME));
      setIndicatorColor(IndicatorColor.YELLOW);
    } else if (conversation?.status === "STARTING") {
      setStatusMessage(t(I18nKey.STATUS$STARTING_RUNTIME));
      setIndicatorColor(IndicatorColor.RED);
    } else if (status === "DISCONNECTED") {
      setStatusMessage(t(I18nKey.STATUS$WEBSOCKET_CLOSED));
      setIndicatorColor(IndicatorColor.RED);
    } else {
      setStatusMessage(AGENT_STATUS_MAP[curAgentState].message);
      setIndicatorColor(AGENT_STATUS_MAP[curAgentState].indicator);
      if (notificationStates.includes(curAgentState)) {
        const message = t(AGENT_STATUS_MAP[curAgentState].message);
        notify(t(AGENT_STATUS_MAP[curAgentState].message), {
          body: t(`Agent state changed to ${curAgentState}`),
          playSound: true,
        });

        // Update browser tab if window exists and is not focused
        if (typeof document !== "undefined" && !document.hasFocus()) {
          browserTab.startNotification(message);
        }
      }
    }
  }, [curAgentState, status, notify, t, conversation?.status]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-base-secondary px-2 py-1 text-gray-400 rounded-[100px] text-sm gap-[6px]">
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${indicatorColor}`}
        />
        <span className="text-sm text-stone-400">{t(statusMessage)}</span>
      </div>
    </div>
  );
}
