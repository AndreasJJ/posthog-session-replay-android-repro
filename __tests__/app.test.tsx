import {AllTheProvidersAuthenticatedComponent, NullComponent, renderRouter, screen} from "@/utils/test-utils";
import Index from "@/app/index";
import HomeLayout from "@/app/home/_layout";
import PagesLayout from "@/app/home/pages/_layout";
import TabsLayout from "@/app/home/pages/(drawer)/(tabs)/_layout";
import DrawerLayout from "@/app/home/pages/(drawer)/_layout";
import ScreenA from "../app/home/pages/(drawer)/(tabs)/screenA";

describe('App', () => {
  it('Render', async () => {
    renderRouter(
        {
          '/': Index,
          _layout: AllTheProvidersAuthenticatedComponent,
          '/home/_layout': HomeLayout,
          '/home/auth': NullComponent,
          '/home/pages/_layout': PagesLayout,
          '/home/pages/(drawer)/_layout': DrawerLayout,
          '/home/pages/(drawer)/(tabs)/_layout': TabsLayout,
          '/home/pages/(drawer)/(tabs)/screenA': ScreenA,
        },
        { initialUrl: '/' }
    );

    expect(screen).toHavePathname('/home/pages/screenA');
  });
});